using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace FlashCards.Controllers
{

    [Produces("application/json")]
    [Route("Category")]
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public class CardController : Controller
    {

        private readonly IConfiguration _config;
        private readonly Repository _repository;

        public CardController(IConfiguration config)
        {
            _config = config;
            _repository = new Repository(config.GetConnectionString("DefaultConnection"));
        }

        [HttpGet("{type}")]
        public IEnumerable<object> GetCards(int? type)
        {
            if (type == null || type == 0) return null;
            var output = _repository.GetAllCards((int)type);
            return output;
        }

        [HttpGet("All")]
        public IEnumerable<object> GetTypes()
        { 
            var output = _repository.GetAllTypes();
            return output;
        }

    }
}
