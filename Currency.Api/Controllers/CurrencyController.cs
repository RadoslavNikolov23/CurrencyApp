using Currency.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Currency.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        private static readonly List<CurrencyRate> currencies =
        [
            new CurrencyRate { Name = "Euro", Code = "EUR", Rate = 1.0m },
            new CurrencyRate { Name = "US Dollar", Code = "USD", Rate = 1.8m },
            new CurrencyRate { Name = "British Pound", Code = "GBP", Rate = 0.86m },
            new CurrencyRate { Name = "Bulgarian Lev", Code = "BGN", Rate = 1.95583m }
        ];

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(currencies);
        }
    }
}
