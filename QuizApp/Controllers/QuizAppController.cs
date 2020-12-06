using Microsoft.AspNetCore.Mvc;
using QuizApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace QuizApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizAppController : ControllerBase
    {

        private QuizDbContext _context;

        public QuizAppController(QuizDbContext context)
        {
            _context = context;
        }
        
        /// <summary>
        /// GET to retrieve all questions
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            var questions = _context.Questions.OrderBy(o => o.ID).ToList();

            return questions;
        }

        /// <summary>
        /// POST to submit entered questions
        /// </summary>
        /// <param name="question"></param>
        /// <returns></returns>
        [HttpPost("post")]
        public IActionResult Post(Question question)
        {
            if (question == null)
            {
                return BadRequest();
            }

            int amount = _context.Questions.Count();

            question.ID = amount + 1; 
  
            _context.Questions.Add(question);
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}
