var builder = WebApplication.CreateBuilder(args);
var corsPolicy = "corsPolicy";
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsPolicy,
                      policy =>
                      {
                          policy.WithOrigins("*");
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(corsPolicy);
app.UseHttpsRedirection();

app.MapGet("/translations", (string languageCode) =>
{
    if (languageCode == "en")
    {
        var translations = new Dictionary<string, string>();
        translations.Add("Greeting", "Hello, sir");
        translations.Add("Farewell", "Good bye, friendo");
        translations.Add("CurrentNumber", "Current number is");
        translations.Add("Add", "Add");
        translations.Add("HideCounter", "Hide counter");
        translations.Add("Required", "Field is Required");
        translations.Add("ShowForm", "Show form");
        return translations;
    }
    else if (languageCode == "no")
    {
        var translations = new Dictionary<string, string>();
        translations.Add("Greeting", "Heisann og hoppsann!");
        translations.Add("Farewell", "Ha det på badet, din gamle sjokolade");
        translations.Add("CurrentNumber", "Nåværende tall er");
        translations.Add("Add", "Legg til");
        translations.Add("HideCounter", "Gjem telleren");
        translations.Add("Required", "Feltet er obligatorisk");
        translations.Add("ShowForm", "Vis skjemaet");
        return translations;
    }
    else
    {
        var translations = new Dictionary<string, string>();
        translations.Add("Greeting", "Greeting");
        translations.Add("Farewell", "Farewell");
        translations.Add("CurrentNumber", "CurrentNumber");
        translations.Add("Add", "Add");
        translations.Add("HideCounter", "HideCounter");
        translations.Add("Required", "Required");
        return translations;
    }
})
.WithName("GetTranslations");

app.Run();
