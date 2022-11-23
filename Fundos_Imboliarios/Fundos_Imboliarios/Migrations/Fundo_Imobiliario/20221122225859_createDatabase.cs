using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace Fundos_Imboliarios.Migrations.Fundo_Imobiliario
{
    public partial class createDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fundos_Imobiliarios",
                columns: table => new
                {
                    Codigo_Fundos = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Dividendo = table.Column<float>(type: "float", nullable: false),
                    Adm_Fundos = table.Column<string>(type: "text", nullable: false),
                    Tipo = table.Column<string>(type: "text", nullable: false),
                    Area = table.Column<string>(type: "text", nullable: false),
                    Desp_Adm = table.Column<string>(type: "text", nullable: false),
                    Id_usuario = table.Column<int>(type: "int", nullable: false),
                    Id_carteira = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fundos_Imobiliarios", x => x.Codigo_Fundos);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fundos_Imobiliarios");
        }
    }
}
