using System;
using TrabalhoImobi.Model;
using Microsoft.EntityFrameworkCore;

namespace TrabalhoImobi.Data
{
    public class CarteiraContext : DbContext
    {
        public CarteiraContext(DbContextOptions<CarteiraContext> opt) : base(opt)
        {
        }
        public DbSet<Carteira> Carteiras { get; set; }
    }

}