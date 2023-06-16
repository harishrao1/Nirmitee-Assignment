import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./CartItems.css";

const Cart = ({ cart, onRemoveFromCart, onUpdateCartQty, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();
  // const isEmpty = cart?.line_items?.length === 0;
  // console.log(isEmpty);

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart,
        <Link className="link" to="/">
          start adding some
        </Link>
        !
      </Typography>
    );
  };

  if (!cart?.line_items) {
    return <p>Loading...</p>;
  }
  const FilledCart = () => {
    return (
      <>
        <Grid style={{ backgroundColor: "#aea7a7" }} container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              {cart.line_items &&
                cart.line_items.map((lineItem) => (
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "white",
                      margin: "5px",
                    }}
                    item
                    xs
                    key={lineItem.id}
                  >
                    <CartItem
                      cart={lineItem}
                      onUpdateCartQty={onUpdateCartQty}
                      onRemoveFromCart={onRemoveFromCart}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={5} lg={5}>
            <Card className="root" elevation={15}>
              <CardContent>
                <Typography
                  className="title"
                  color="textSecondary"
                  gutterBottom
                >
                  Shopping Cart
                </Typography>
                <Typography variant="div" component="h2">
                  {" "}
                  Order Summary
                </Typography>
                <Typography variant="subtitle2">
                  <hr />
                </Typography>
                <Grid container>
                  <Grid item xs={12} sm={8} md={8} lg={8}>
                    <Typography
                      fontWeight="600"
                      variant="body1"
                      component="div"
                    >
                      Total Amount:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Typography variant="h6" component="div">
                      {cart?.subtotal.formatted_with_symbol}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className="actions">
              <CardActions>
                <Button
                  onClick={handleEmptyCart}
                  className="empty-btn"
                  size="medium"
                  color="secondary"
                  variant="outlined"
                >
                  Empty Cart
                </Button>
                <Button
                  component={Link}
                  to="/"
                  className="checkout-btn"
                  size="medium"
                  color="secondary"
                  variant="outlined"
                >
                  Checkout
                </Button>
              </CardActions>
            </div>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <Container>
      <div className="cart-toolBar" />
      <Typography className="cart-title" variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart?.line_items.length ? EmptyCart() : FilledCart()}
    </Container>
  );
};
export default Cart;
