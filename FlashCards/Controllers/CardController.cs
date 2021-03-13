using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace FlashCards.Controllers
{

    [Produces("application/json")]
    [Route("Cards")]
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

        [HttpGet("All")]
        [Produces("application/json")]
        public IEnumerable<object> GetCards()
        {
            var output = _repository.GetAllCards();
            return output;
        }

    }
}
