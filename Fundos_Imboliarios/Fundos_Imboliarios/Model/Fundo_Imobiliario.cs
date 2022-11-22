using System;
using System.ComponentModel.DataAnnotations;


namespace Fundos_Imboliarios.Model
{
    public class Fundos_Imboliario
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
    }
}
