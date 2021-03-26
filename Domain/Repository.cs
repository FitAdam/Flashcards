using Dapper;
using Dapper.Contrib.Extensions;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Domain
{
    public class Repository
    {
        private readonly string _connectionString;

        public Repository()
        {

        }

        public Repository(string connectionString) : this()
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Card> GetAllCards(int typeID)
        {
            using var connection = GetConnection(_connectionString).Result;
            return connection.Query<Card>($"SELECT * FROM CARDS where typeID = '{typeID}'");
        }

        public IEnumerable<Types> GetAllTypes()
        {
            using var connection = GetConnection(_connectionString).Result;
            return connection.Query<Types>($"SELECT * FROM TYPES");
        }

        private async Task<IDbConnection> GetConnection(string connectionString)
        {
            if (string.IsNullOrEmpty(connectionString)) throw new InvalidExpressionException("Connection string cannot be null or empty");

            var connection = new MySqlConnection(connectionString);
            try
            {
                await connection.OpenAsync();
            }
            catch (Exception)
            {
                return null;
            }

            return connection;
        }

        public async Task OpenConnection(string connectionString)
        {
            await GetConnection(connectionString);
        }
    }
}
