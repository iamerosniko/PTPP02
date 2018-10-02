using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace API.Migrations
{
    public partial class m005 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PP_Tasks",
                columns: table => new
                {
                    TaskID = table.Column<Guid>(nullable: false),
                    ProjectID = table.Column<Guid>(nullable: false),
                    TaskDesc = table.Column<string>(nullable: true),
                    TaskStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Tasks", x => x.TaskID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PP_Tasks");
        }
    }
}
