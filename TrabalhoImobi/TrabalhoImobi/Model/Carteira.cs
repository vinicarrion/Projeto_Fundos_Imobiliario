using System;
using System.ComponentModel.DataAnnotations;

namespace TrabalhoImobi.Model
{
    public class Carteira
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public String FIIS { get; set; }
        [Required]
        public String Dinheiro_Aplicado { get; set; }
    }
}
