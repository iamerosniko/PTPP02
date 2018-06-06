using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace API.Migrations
{
    public partial class m001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_ProjectContacts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_MapCodes",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_Main",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_Departments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_Contacts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_Comments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_CentricScores",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GroupName",
                table: "PP_Categories",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_ProjectContacts");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_MapCodes");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_Main");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_Departments");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_Contacts");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_Comments");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_CentricScores");

            migrationBuilder.DropColumn(
                name: "GroupName",
                table: "PP_Categories");
        }
    }
}
