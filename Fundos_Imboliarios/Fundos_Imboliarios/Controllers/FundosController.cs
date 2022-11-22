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
        public IActionResult AddFundos_Imboliarios([FromBody] Fundos_Imboliario fundo)
        {
            _context.Fundos_Imobiliarios.Add(fundo);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCardById), new { Id = fundo.Codigo_Fundos }, fundo);
        }

        [HttpGet]
        

        [HttpGet("{id}")]
        public IActionResult GetCardById(int id)
        {
            Fundos_Imboliario fundos = _context.Fundos_Imobiliarios.FirstOrDefault(fundos => fundos.Codigo_Fundos == id);
            if (fundos != null)
            {
                return Ok(fundos);
            }
            return NotFound();
        }
    }
}