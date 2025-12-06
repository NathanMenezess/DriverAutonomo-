import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Obrigatório"),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("Obrigatório"),
});

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log("Login realizado:", values);
            // chamar sua API de autenticação
          }}
        >
          {({ values, errors, touched, handleChange, isSubmitting }) => (
            <Form style={{ width: "100%" }}>
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                disabled={isSubmitting}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Senha"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {isSubmitting ? <CircularProgress size={24} /> : "Entrar"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Login;
