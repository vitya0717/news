using System;
using System.Collections.Generic;

namespace NewsProjekt.Models;

public partial class News
{
    public int NewsId { get; set; }

    public string? NewsTitle { get; set; }

    public string? NewsBrief { get; set; }

    public string? NewsCategory { get; set; }

    public string? NewsFullHu { get; set; }

    public string? NewsFullEn { get; set; }

    public byte[]? NewsPicture { get; set; }
}
