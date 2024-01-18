using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace NewsProjekt.Models;

public partial class NewsContext : DbContext
{
    public NewsContext()
    {
    }

    public NewsContext(DbContextOptions<NewsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<News> News { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("SERVER=localhost;PORT=3306;DATABASE=news;USER=root;PASSWORD=;SSL MODE=none;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<News>(entity =>
        {
            entity.HasKey(e => e.NewsId).HasName("PRIMARY");

            entity.ToTable("news");

            entity.Property(e => e.NewsId)
                .HasColumnType("int(11)")
                .HasColumnName("news_id");
            entity.Property(e => e.NewsBrief)
                .HasMaxLength(255)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("news_brief");
            entity.Property(e => e.NewsCategory)
                .HasMaxLength(200)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("news_category");
            entity.Property(e => e.NewsFullEn)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("news_full_en");
            entity.Property(e => e.NewsFullHu)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text")
                .HasColumnName("news_full_hu");
            entity.Property(e => e.NewsPicture)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("blob")
                .HasColumnName("news_picture");
            entity.Property(e => e.NewsTitle)
                .HasMaxLength(100)
                .HasDefaultValueSql("'NULL'")
                .HasColumnName("news_title");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
