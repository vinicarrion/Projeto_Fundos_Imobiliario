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
    public class CarteiraController : ControllerBase
    {
        private CarteiraContext _context;

        public CarteiraController(CarteiraContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddCarteira([FromBody] Carteira carteira)
        {
            _context.Carteiras.Add(carteira);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCardById), new { Id = carteira.Id },  carteira);
        }

        [HttpGet]
        public IEnumerable<Carteira> GetCards()
        {
            return _context.Carteiras;
        }

        [HttpGet("{id}")]
        public IActionResult GetCardById(int id)
        {
            Carteira carteira = _context.Carteiras.FirstOrDefault(carteira => carteira.Id == id);
            if (carteira != null)
            {
                return Ok(carteira);
            }
            return NotFound();
        }
    }
}