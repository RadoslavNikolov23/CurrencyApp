using Currency.Api.Models;
using HtmlAgilityPack;

namespace Currency.Api.Services
{
    public class ExchangeRateService
    {
        public async Task<List<CurrencyRate>> GetExchangeRates(int day, int month, int year)
        {
            List<CurrencyRate> currentCurrency = new List<CurrencyRate>();

            DateTime today = DateTime.Now;

            if ((today.Day < day && today.Month < month && today.Year < year)
                || (today.Month < month && today.Year < year)
                || (today.Year < year))
            {

                throw new IndexOutOfRangeException("Cannot show for future dates! Please select again!");
            }

            while (today.DayOfWeek == DayOfWeek.Saturday || today.DayOfWeek == DayOfWeek.Sunday)
            {
                today = today.AddDays(-1);
            }


            string url = $"https://www.bnb.bg/Statistics/StExternalSector/StExchangeRates/StERForeignCurrencies/index.htm?downloadOper=&group1=first&firstDays={today.Day}&firstMonths={today.Month}&firstYear={today.Year}&search=true&showChart=false&showChartButton=false";

            HttpClient client = new HttpClient();

            try
            {
                string html = await client.GetStringAsync(url);
                HtmlDocument doc = new HtmlDocument();

                doc.LoadHtml(html);

                HtmlNodeCollection tableNodes = doc
                                                .DocumentNode
                                                .SelectNodes("//div[@class='table_box']");


                if (tableNodes != null)
                {
                    foreach (var node in tableNodes)
                    {
                        var tbodyNodes = node.SelectNodes(".//tbody");

                        if (tbodyNodes != null)
                        {
                            foreach (var tbody in tbodyNodes)
                            {
                                var firstTrNodes = tbody
                                                      .SelectNodes(".//tr[@class='first']");
                                var restTrNodes = tbody
                                                      .SelectNodes(".//tr");

                                //if (firstTrNodes != null)
                                //{
                                //    foreach (var tr in firstTrNodes)
                                //    {
                                //        HtmlNode firstTd = tr
                                //                            .SelectSingleNode(".//td[@class='first']");
                                //        HtmlNode centerTd1 = tr
                                //                            .SelectSingleNode(".//td[@class='center']");
                                //        HtmlNode centerTd2 = tr
                                //                            .SelectSingleNode(".//td[@class='center'][2]"); // second center column
                                //        HtmlNode lastCenterTd = tr
                                //                            .SelectSingleNode(".//td[@class='last center']");

                                //        CurrencyRate currency = new CurrencyRate(
                                //                                firstTd.InnerText.ToString(),
                                //                                centerTd1.InnerText.ToString(),
                                //                                centerTd2.InnerText.ToString(),
                                //                                lastCenterTd.InnerText.ToString()
                                //                                );

                                //        currentCurrency.Add(currency);
                                //    }
                                //}

                                if (restTrNodes != null)
                                {
                                    foreach (var tr in restTrNodes)
                                    {
                                        HtmlNode firstTd = tr
                                                        .SelectSingleNode(".//td[@class='first']");
                                        HtmlNode centerTd1 = tr
                                                        .SelectSingleNode(".//td[@class='center']");
                                        HtmlNode centerTd2 = tr
                                                          .SelectSingleNode(".//td[@class='center'][2]"); // second center column
                                        HtmlNode lastCenterTd = tr
                                                          .SelectSingleNode(".//td[@class='last center']");

                                        if (firstTd == null
                                            || centerTd1 == null
                                            || centerTd2 == null
                                            || lastCenterTd == null)
                                            continue;

                                        CurrencyRate currency = new CurrencyRate(
                                                                firstTd.InnerText.ToString(),
                                                                centerTd1.InnerText.ToString(),
                                                                centerTd2.InnerText.ToString(),
                                                                lastCenterTd.InnerText.ToString()
                                                                );

                                        currentCurrency.Add(currency);

                                    }
                                }
                            }
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine("Error - " + ex.Message);
            }

            return currentCurrency;

        }
    }
}
