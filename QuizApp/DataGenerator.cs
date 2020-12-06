using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace QuizApp
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new QuizDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<QuizDbContext>>()))
            {
                // Look for any board games.
                if (context.Questions.Any())
                {
                    return;   // Data was already seeded
                }

                context.Questions.AddRange(
                    new Models.Question
                    {
                        ID = 1,
                        QuestionText = "What year was the Queens Coronation?",
                        A = "1963",
                        B = "1951",
                        C = "1953",
                        D = "1961",
                        CorrectAnswer = "C"
                    },
                    new Models.Question
                    {
                        ID = 2,
                        QuestionText = "What first name was Voldemort born with?",
                        A = "Tom",
                        B = "Quincy",
                        C = "Charles",
                        D = "Joe",
                        CorrectAnswer = "A"
                    });

                context.SaveChanges();
            }
        }
    }
}
