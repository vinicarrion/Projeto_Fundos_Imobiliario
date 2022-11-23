using System;
using Fundos_Imboliarios.Model;
using Microsoft.EntityFrameworkCore;


namespace Fundos_Imboliarios.Data
{
    public class UsuarioContext : DbContext
    {
        public UsuarioContext(DbContextOptions<UsuarioContext> opt) : base(opt)
        {
        }
        public DbSet<Usuario> Usuarios { get; set; }
    }


}
