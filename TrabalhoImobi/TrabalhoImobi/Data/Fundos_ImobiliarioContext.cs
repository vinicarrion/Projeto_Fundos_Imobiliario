using System;
using TrabalhoImobi.Model;
using Microsoft.EntityFrameworkCore;

namespace TrabalhoImobi.Data
{
    public class Fundos_ImobiliarioContext : DbContext
    {
        public Fundos_ImobiliarioContext(DbContextOptions<Fundos_ImobiliarioContext> opt) : base(opt)
        {
        }
        public DbSet<Fundos_Imobiliario> Fundos_Imobiliarios { get; set; }
    }

}