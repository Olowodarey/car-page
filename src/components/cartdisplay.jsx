import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Popover, Typography, IconButton, Box, Divider } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItem from "./Cartitem"; 
import { useNavigate } from 'react-router-dom';
import { selectCartTotal } from '../stores/Cartstore';

const CartPopover = () => {
  const carts = useSelector((state) => state.cart.items) || [];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity) || 0;
  const navigate = useNavigate();
  const total = useSelector(selectCartTotal);
  



  const handleCheckout = () => {
    navigate('/checkout');
  };

  

  return (
    <PopupState variant="popover" popupId="cart-popover">
      {(popupState) => (
        <div>
          <IconButton color="inherit" {...bindTrigger(popupState)}>
            <ShoppingCartIcon />
            {totalQuantity > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 18,
                  height: 18,
                  bgcolor: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                }}
              >
                {totalQuantity}
              </Box>
            )}
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box sx={{ width: 500, p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }} className='flex justify-center items-center'>
                Cart Item 
              </Typography>
              {carts.length > 0 ? (
                <Box sx={{ maxHeight: 300, overflowY: 'auto' }} className="">
                  {carts.map((item, index) => (
                    <CartItem key={index} data={item}  />
                  ))}
                </Box>
              ) : (
                <Typography variant="body2">Your cart is empty</Typography>
              )}
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="border px-2 flex items-center border-blue-900 rounded ">
                  <h2 className='font-bold'>  Total: ${total} </h2>  
                </div>
                <Button variant="contained" color="primary" onClick={handleCheckout}>
                  Checkout
                </Button>
              </Box>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default CartPopover;
