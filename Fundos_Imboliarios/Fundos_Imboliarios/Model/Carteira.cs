using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fundos_Imboliarios.Model
{
    public class Carteira
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public String FIIS { get; set; }

        [ForeignKey("Usuario")]
        public int Id_usuario { get; set; }
    }
}
