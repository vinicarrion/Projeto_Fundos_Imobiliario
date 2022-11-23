using System.ComponentModel.DataAnnotations;
using System;

namespace Fundos_Imboliarios.Data.Put_Delete
{
    public class UpdateUsuario
    {
        public String Nome { get; set; }
        [Required]
        public String CPF { get; set; }
        [Required]
        public string Endereco { get; set; }
        [Required]
        public String Email { get; set; }
        public String Senha { get; set; }
    }
}
