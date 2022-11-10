using System;
using TrabalhoImobi.Model;
using Microsoft.EntityFrameworkCore;

namespace TrabalhoImobi.Data
{
    public class UsuarioContext : DbContext
    {
        public UsuarioContext(DbContextOptions<UsuarioContext> opt) : base(opt)
        {
        }
        public DbSet<Usuario> Usuarios { get; set; }
    }

}
