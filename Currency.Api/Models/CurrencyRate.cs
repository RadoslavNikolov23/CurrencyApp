namespace Currency.Api.Models
{
    public class CurrencyRate
    { 
        public string Name { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        public decimal Rate { get; set; }

     
    }
}
