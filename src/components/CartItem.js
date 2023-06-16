import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "./CartItems.css";

const CartItem = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <>
      <Card className="root">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <CardMedia component="img" image={cart.image.url} height="151" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent className="product-content">
              <Typography variant="div" component="h3">
                {cart.name}
              </Typography>
              <Typography variant="subtitle2">
                <hr />
              </Typography>

              <Grid container>
                <Grid item xs={6} sm={6}>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Quantity:
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography variant="h6" component="div" color="primary">
                    {cart.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography
                    style={{ fontWeight: "bold" }}
                    variant="h6"
                    component="div"
                  >
                    Price:
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography variant="h6" component="div" color="secondary">
                    {cart.price.formatted}
                    <hr />
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography
                    style={{ fontWeight: "bold" }}
                    variant="p"
                    component="div"
                  >
                    Price:
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Typography variant="h6" component="div" color="secondary">
                    {cart.line_total.formatted_with_symbol}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <CardActions className="card-actions">
        <div className="buttons">
          <Button
            type="button"
            size="small"
            // variant="outlined"
            onClick={() => handleUpdateCartQty(cart.id, cart.quantity - 1)}
          >
            -
          </Button>
          <Typography>&nbsp;{cart.quantity}&nbsp;</Typography>
          <Button
            sx={{ padding: "2px" }}
            type="button"
            size="small"
            // variant="contained"
            onClick={() => handleUpdateCartQty(cart.id, cart.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          size="small"
          variant="outlined"
          type="button"
          color="secondary"
          className="remove-product"
          onClick={() => handleRemoveFromCart(cart.id)}
        >
          Remove
        </Button>
      </CardActions>
    </>
  );
};
export default CartItem;
