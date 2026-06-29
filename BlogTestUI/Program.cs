using BlogDataLibrary;
using Microsoft.Extensions.Configuration;

var builder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

IConfiguration config = builder.Build();

SqlDataAccess db = new SqlDataAccess(config);
UserData userData = new UserData(db);

Console.WriteLine("Fetching users from database...");
var users = await userData.GetUsers();

foreach (var user in users)
{
    Console.WriteLine($"User: {user.UserName} | Name: {user.FirstName} {user.LastName}");
}

Console.ReadLine();