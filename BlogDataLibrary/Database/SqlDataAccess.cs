using Dapper;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace BlogDataLibrary.Database
{
    public class SqlDataAccess : ISqlDataAccess
    {
        private readonly IConfiguration _config;

        public SqlDataAccess(IConfiguration config)
        {
            _config = config;
        }

        public List<T> LoadData<T, U>(string sql, U parameters, string connectionStringName, bool isStoredProcedure)
        {
            string connectionString = _config.GetConnectionString(connectionStringName);
            CommandType commandType = isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text;

            using (IDbConnection connection = new SqlConnection(connectionString))
            {
   
                var rows = connection.Query<T>(sql, parameters, commandType: commandType);
                return rows.ToList();
            }
        }


        public void SaveData<T>(string sql, T parameters, string connectionStringName, bool isStoredProcedure)
        {
            string connectionString = _config.GetConnectionString(connectionStringName);
            CommandType commandType = isStoredProcedure ? CommandType.StoredProcedure : CommandType.Text;

            using (IDbConnection connection = new SqlConnection(connectionString))
            {

                connection.Execute(sql, parameters, commandType: commandType);
            }
        }
    }
}