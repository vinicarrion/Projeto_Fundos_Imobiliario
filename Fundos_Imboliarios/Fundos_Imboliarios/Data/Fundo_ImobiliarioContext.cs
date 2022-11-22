using System;
using Fundos_Imboliarios.Model;
using Microsoft.EntityFrameworkCore;

namespace Fundos_Imboliarios.Data
{
    public class Fundo_ImobiliarioContext : DbContext
    {
        public Fundo_ImobiliarioContext(DbContextOptions<Fundo_ImobiliarioContext> opt) : base(opt)
        {
        }
        public DbSet<Model.Fundos_Imboliario> Fundos_Imobiliarios { get; set; }
    }

}