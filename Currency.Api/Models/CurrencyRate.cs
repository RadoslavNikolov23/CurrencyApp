namespace Currency.Api.Models
{
    public class CurrencyRate
    { 
        public CurrencyRate(string currency, string code, string forOneEuro, string euroForOneCurrency)
        {
            this.Currency = currency;
            this.Code = code;
            this.ForOneEuro = forOneEuro;
            this.EuroForOneCurrency = euroForOneCurrency;

        }

        public string Currency { get; set; }
        public string Code { get; set; }
        public string ForOneEuro { get; set; }
        public string EuroForOneCurrency { get; set; }

        public override string ToString()
        {
            return $"{this.Currency} - {this.Code} - {this.ForOneEuro} - {this.EuroForOneCurrency}";
        }


    }
}
