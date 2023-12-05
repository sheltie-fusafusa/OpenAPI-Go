package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type AppHandler struct{}

// ハンドラーの実装
func (h AppHandler) Greeting(ctx echo.Context) error {
	var param GreetingRequest
	err := ctx.Bind(&param)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, err.Error())
	}

	greeting := "こんにちは、" + param.Name + "さん"
	var result GreetingResponse
	result.Greeting = &greeting
	return ctx.JSON(http.StatusOK, result)
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	handler := AppHandler{}
	RegisterHandlers(e, &handler)

	e.Logger.Fatal(e.Start(":1323"))
}
