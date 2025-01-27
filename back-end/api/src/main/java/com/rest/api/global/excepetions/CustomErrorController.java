package com.rest.api.global.excepetions;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

    // Esse método trata o erro 404
    @RequestMapping("/error")
    public String handleError() {
        // Verifica se o erro é 404
        if (isNotFound()) {
            // Retorna a página de erro personalizada para 404
            return "error/404";  // Caminho para a página customizada 404 (exemplo com Thymeleaf)
        }
        // Para outros erros, pode retornar uma página genérica ou algo mais, se necessário
        return "error/genericError";  // Para outros erros, como 500, pode ser redirecionado para outra página
    }

    private boolean isNotFound() {
        // Verifica o status do erro, se for 404 (Página Não Encontrada)
        return HttpStatus.NOT_FOUND.value() == getStatusCode();
    }

    private int getStatusCode() {
        // Você pode usar uma solução customizada para capturar o código de erro
        // Aqui estamos usando um código simplificado como exemplo
        return 404; // No Spring Boot, você pode configurar isso de várias maneiras
    }
}
