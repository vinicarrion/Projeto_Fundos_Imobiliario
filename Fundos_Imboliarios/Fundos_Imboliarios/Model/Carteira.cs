using System;
using System.ComponentModel.DataAnnotations;


namespace Fundos_Imboliarios.Model
{
    public class Carteira
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public String FIIS { get; set; }
    }
}
