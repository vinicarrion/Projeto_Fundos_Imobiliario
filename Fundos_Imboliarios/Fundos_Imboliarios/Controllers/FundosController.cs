using System;
using System.Collections.Generic;
using System.Linq;
using Fundos_Imboliarios.Data;
using Fundos_Imboliarios.Model;
using Microsoft.AspNetCore.Mvc;

namespace Fundos_Imboliarios.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FundosController : ControllerBase
    {
        private Fundo_ImobiliarioContext _context;

        public FundosController(Fundo_ImobiliarioContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddFundos([FromBody] Fundo fundo)
        {
            _context.Fundos.Add(fundo);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCardById), new { Id = fundo.Codigo_Fundos }, fundo);
        }

        [HttpGet]
        public IEnumerable<Fundo> GetCards()
        {
            return _context.Fundos;
        }

        [HttpGet("{id}")]
        public IActionResult GetCardById(int id)
        {
            Fundo fundo = _context.Fundos.FirstOrDefault(fundo => fundo.Codigo_Fundos == id);
            if (fundo != null)
            {
                return Ok(fundo);
            }
            return NotFound();
        }
    }
}