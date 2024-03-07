using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace serever_good.Migrations
{
    public partial class Initial3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeList_CategoryList_CatgoryId",
                table: "RecipeList");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryList",
                table: "CategoryList");

            migrationBuilder.RenameTable(
                name: "CategoryList",
                newName: "CategoryList1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryList1",
                table: "CategoryList1",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeList_CategoryList1_CatgoryId",
                table: "RecipeList",
                column: "CatgoryId",
                principalTable: "CategoryList1",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeList_CategoryList1_CatgoryId",
                table: "RecipeList");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryList1",
                table: "CategoryList1");

            migrationBuilder.RenameTable(
                name: "CategoryList1",
                newName: "CategoryList");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryList",
                table: "CategoryList",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeList_CategoryList_CatgoryId",
                table: "RecipeList",
                column: "CatgoryId",
                principalTable: "CategoryList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
