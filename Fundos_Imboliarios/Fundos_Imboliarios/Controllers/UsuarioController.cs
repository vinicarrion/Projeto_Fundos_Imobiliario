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
    public class UsuarioController : ControllerBase
    {
        private UsuarioContext _context;

        public UsuarioController(UsuarioContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddUsuarios([FromBody] Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCardById), new { Id = usuario.Id }, usuario);
        }

        [HttpGet]
        public IEnumerable<Usuario> GetCards()
        {
            return _context.Usuarios;
        }

        [HttpGet("{id}")]
        public IActionResult GetCardById(int id)
        {
            Usuario usuario = _context.Usuarios.FirstOrDefault(usuario => usuario.Id == id);
            if (usuario != null)
            {
                return Ok(usuario);
            }
            return NotFound();
        }
    }
}