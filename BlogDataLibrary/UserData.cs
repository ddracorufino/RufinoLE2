namespace BlogDataLibrary
{
    public class UserData
    {
        private readonly SqlDataAccess _db;

        public UserData(SqlDataAccess db)
        {
            _db = db;
        }

        public Task<List<UserModel>> GetUsers()
        {
            string sql = "select * from dbo.Users";
            return _db.LoadData<UserModel, dynamic>(sql, new { }, "Default");
        }
    }
}