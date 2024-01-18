using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewsProjekt.Models;

namespace NewsProjekt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        [HttpGet]
        public ActionResult getNews()
        {
            try
            {
                using var context = new NewsContext();

                var news = context.News.ToList();

                return Ok(news);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
    }
}
