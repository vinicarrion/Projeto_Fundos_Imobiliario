using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Fundos_Imboliarios.Model
{
    public class Usuario
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public String Nome { get; set; }
        [Required]
        public String CPF { get; set; }
        [Required]
        public string Endereco { get; set; }
        [Required]
        public String Email { get; set; }
    }
}
