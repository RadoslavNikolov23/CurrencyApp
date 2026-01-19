using Currency.Api.Models;
using Currency.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Currency.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {

        private readonly ExchangeRateService currencies;
        public CurrencyController(ExchangeRateService currencies)
        {
            this.currencies = currencies;
        }

        [HttpGet]
        [ResponseCache(Duration = 600)]
        public async Task<IActionResult> GetAll()
        {
            DateTime today = DateTime.UtcNow.Date;
            List<CurrencyRate> currencies = await this.currencies.GetExchangeRates(today.Day,today.Month,today.Year);
            return Ok(currencies);
        }
    }
}
