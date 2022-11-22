using System;
using Fundos_Imboliarios.Model;
using Microsoft.EntityFrameworkCore;

namespace Fundos_Imboliarios.Data
{
    public class CarteiraContext : DbContext
    {
        public CarteiraContext(DbContextOptions<CarteiraContext> opt) : base(opt)
        {
        }
        public DbSet<Carteira> Carteiras { get; set; }
    }

}