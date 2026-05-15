# Configuración de Envío de Emails en Vercel

Este guía te ayudará a configurar el envío de emails del formulario de presupuesto usando SendGrid en Vercel.

## 1. Crear una cuenta en SendGrid

1. Ve a https://sendgrid.com/
2. Haz clic en **Sign Up** y crea una cuenta (la versión gratuita permite hasta 100 emails/día)
3. Verifica tu correo electrónico

## 2. Obtener tu API Key de SendGrid

1. Accede a tu dashboard de SendGrid: https://app.sendgrid.com/
2. En el menú lateral, ve a **Settings** → **API Keys**
3. Haz clic en **Create API Key**
4. Dale un nombre descriptivo (ej: "Burgos Reformas Vercel")
5. Selecciona **Restricted Access** y dale permisos para **Mail Send**
6. Haz clic en **Create & Copy**
7. **Copia tu API Key en un lugar seguro** (no podrás verla de nuevo)

## 3. Verificar tu Email Remitente en SendGrid

1. En el dashboard de SendGrid, ve a **Settings** → **Sender Authentication**
2. Haz clic en **Verify a Single Sender** (si es la primera vez)
3. Rellena los datos con tu información:
   - Email: usa un remitente que luego pondrás en `FROM_EMAIL`
   - From Name: `Burgos Reformas Integrales`
4. Se te enviará un email de confirmación; **confirma el enlace**
5. Una vez confirmado, ya puedes usar este email como remitente

## 4. Configurar Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com/
2. Abre tu proyecto **burgos-reformas-integrales**
3. Ve a **Settings** → **Environment Variables**
4. Añade dos variables:

   | Variable | Valor |
   |----------|-------|
   | `SENDGRID_API_KEY` | Tu API Key de SendGrid (paso 2) |
   | `OWNER_EMAIL` | `sergiomartinrodriguez99@outlook.es` |
   | `FROM_EMAIL` | Tu remitente verificado en SendGrid |

5. Asegúrate de que las variables estén habilitadas para **Production** y **Preview**
6. Haz clic en **Save**

## 5. Desplegar los Cambios

1. Sube los cambios a tu repositorio Git:
   ```bash
   git add .
   git commit -m "feat: add email sending functionality with SendGrid"
   git push
   ```

2. Vercel detectará los cambios automáticamente y desplegará la nueva versión

3. Espera a que el despliegue se complete (verás un ✓ en verde)

## 6. Probar Localmente (Opcional)

Si quieres probar en tu máquina local antes de desplegar:

1. Copia `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` y rellena:
   ```
   SENDGRID_API_KEY=tu_api_key_aqui
   OWNER_EMAIL=sergiomartinrodriguez99@outlook.es
   FROM_EMAIL=tu_remitente_verificado@tudominio.com
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npx vercel dev
   ```

5. Abre http://localhost:3000 en tu navegador

6. Rellena el formulario de presupuesto y verifica que recibas los emails

## 7. Verificar que Funciona

1. Ve a tu sitio: https://reformasen-burgos.vercel.app/
2. Rellena el formulario de presupuesto
3. Deberías ver la página de "¡Gracias por contactarnos!" ✓
4. Revisa tu correo `sergiomartinrodriguez99@outlook.es` - deberías recibir:
   - Un email con los datos del presupuesto
   - (Opcional) Un email de confirmación para el usuario que rellenó el formulario

## Solución de Problemas

### No recibo los emails
- ✓ Verifica que confirmaste el email remitente en SendGrid y que está puesto en `FROM_EMAIL`
- ✓ Revisa la carpeta de SPAM
- ✓ Comprueba que las variables de entorno estén configuradas en Vercel
- ✓ Revisa los logs de Vercel: Settings → Functions → Logs

### Error "Invalid SendGrid API Key"
- ✓ Copia nuevamente tu API Key de SendGrid
- ✓ Asegúrate de que esté bien escrita en Vercel (sin espacios)
- ✓ Regenera la API Key si no funciona

## Coste

- **SendGrid Plan Gratuito**: Hasta 100 emails/día (suficiente para un sitio de reformas)
- **Vercel Plan Gratuito**: Funciones serverless ilimitadas

---

**¡Listo!** Tu formulario de presupuesto ahora enviará emails a través de SendGrid en Vercel. 🚀
