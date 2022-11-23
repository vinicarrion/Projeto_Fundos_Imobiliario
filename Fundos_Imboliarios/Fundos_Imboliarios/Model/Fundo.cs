using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fundos_Imboliarios.Model
{
    public class Fundo
    {
        [Key]
        [Required]
        public int Codigo_Fundos { get; set; }
        [Required]
        public float Dividendo { get; set; }
        [Required]
        public String Adm_Fundos { get; set; }
        [Required]
        public string Tipo { get; set; }
        [Required]
        public String Area { get; set; }
        [Required]
        public String Desp_Adm { get; set; }

        [ForeignKey("Usuario")]
        public int Id_usuario { get; set; }

        [ForeignKey("Carteira")]
        public int Id_carteira { get; set; }

    }
}
