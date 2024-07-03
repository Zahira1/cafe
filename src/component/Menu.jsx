import React from 'react';
import './Menu.css';
const Menu = () => {
    // Example menu data
    const menuItems = [
        {
            category: 'Appetizers',
            items: [
                { name: 'Mixed Vegetable Pakora', price: '$8.99', description: 'Crispy fritters made with fresh julienned vegetables, herbs, and spices, deep-fried to golden perfection.' },
                { name: 'Onion Pakora', price: '$8.99', description: 'Sliced onions coated in seasoned chickpea batter and fried.' },
                { name: 'Vegetable Samosa (2 Pcs)', price: '$4.29', description: 'Crispy pastry stuffed with spiced potatoes and peas, featuring flavors of various herbs and spices.' },
                { name: 'Gobi Manchurian', price: '$11.99', description: 'Fried cauliflower tossed in a tangy Indo-Chinese sauce.' },
                { name: 'Gobi 65', price: '$11.99', description: 'Spicy, deep-fried cauliflower bites.' },
                { name: 'Paneer Tikka Kabab', price: '$15.99', description: 'Grilled cottage cheese marinated in yogurt, herbs, and spices, cooked on skewers.' },
                { name: 'Paneer Chili', price: '$13.99', description: 'Cottage cheese cubes stir-fried with bell peppers, onions, and chili sauce, enhanced with soy sauce, ginger, garlic, and spices.' },
                { name: 'Baby Corn Manchurian', price: '$12.99', description: 'Baby corn fritters tossed in a spicy Manchurian sauce.' }
            ]
        },
        {
            category: 'Non-Veg Appetizers',
            items: [
                { name: 'Chicken 65', price: '$12.99', description: 'Spicy, deep-fried chicken pieces.' },
                { name: 'Chicken Manchurian', price: '$12.99', description: 'Fried chicken tossed in a tangy Indo-Chinese sauce.' },
                { name: 'Chilly Shrimp', price: '$13.99', description: 'Shrimp stir-fried with bell peppers and chili sauce.' },
                { name: 'Fish 65', price: '$14.99', description: 'Spicy, deep-fried fish bites.' },
                { name: 'Chicken Lollipops (Pcs)', price: '$14.99', description: 'Fried chicken wings with a tangy sauce.' },
                { name: 'Chicken 555', price: '$13.99', description: 'Unique blend of spices for marinated chicken.' },
                { name: 'Garlic Chicken', price: '$12.99', description: 'Chicken stir-fried with garlic and spices.' },
                { name: 'Goat Sukka', price: '$14.99', description: 'Dry, spicy goat meat preparation.' },
                { name: 'Chicken Pepper Masala', price: '$12.99', description: 'Chicken cooked with black pepper and spices.' },
                { name: 'Shrimp 65', price: '$14.99', description: 'Spicy, deep-fried shrimp pieces.' },
                { name: 'Chicken Choila', price: '$12.99', description: 'Fresh boneless grilled chicken marinated with onion, garlic, ginger, and Himalayan spices.' },
                { name: 'Lamb Choila', price: '$14.99', description: 'Fresh boneless grilled lamb marinated with onion, garlic, ginger, and Himalayan spices.' },
                { name: 'Lamb Sukka', price: '$14.99', description: 'Dry, spicy lamb meat preparation.' },
                { name: 'Goat Sekuwa', price: '$14.99', description: 'Marinated and grilled goat meat.' },
                { name: 'Chicken Sekuwa', price: '$12.99', description: 'Marinated and grilled chicken.' }
            ]
        },
        {
            category: 'Soups & Salads',
            items: [
                { name: 'Hot & Sour Vegetable Soup', price: '$4.99', description: 'Spicy and tangy vegetable soup.' },
                { name: 'Veg Thuppa', price: '$9.99', description: 'Traditional Nepali vegetable noodle soup.' },
                { name: 'Chicken Soup', price: '$8.99', description: 'Classic chicken broth with spices.' },
                { name: 'Chicken Thuppa', price: '$11.99', description: 'Traditional Nepali chicken noodle soup.' },
                { name: 'Mixed Green Salad', price: '$9.99', description: 'Fresh greens with a light dressing.' }
            ]
        },
        {
            category: 'MO:MO Special',
            items: [
                { name: 'Veg Steam Momo', price: '$10.99', description: 'Steamed dumplings filled with vegetables.' },
                { name: 'Chicken Steam Momo', price: '$10.99', description: 'Steamed dumplings filled with chicken.' },
                { name: 'Veg Fried Momo', price: '$11.99', description: 'Fried vegetable dumplings.' },
                { name: 'Chicken Fried Momo', price: '$11.99', description: 'Fried chicken dumplings.' },
                { name: 'Veg Jhol Momo', price: '$11.99', description: 'Vegetable dumplings in a spicy broth.' },
                { name: 'Chicken Jhol Momo', price: '$11.99', description: 'Chicken dumplings in a spicy broth.' },
                { name: 'Veg Chilli Momo', price: '$12.99', description: 'Vegetable dumplings stir-fried with chili sauce.' },
                { name: 'Chicken Chilli Momo', price: '$12.99', description: 'Chicken dumplings stir-fried with chili sauce.' }
            ]
        },
        {
            category: 'Noddles',
            items: [
                { name: 'Veg Chowmein', price: '$12.99', description: 'Stir-fried noodles with vegetables.' },
                { name: 'Chicken Chowmein', price: '$14.99', description: 'Stir-fried noodles with chicken.' },
                { name: 'Shrimp Chowmein', price: '$15.99', description: 'Stir-fried noodles with shrimp..' },
                { name: 'Egg Chowmein', price: '$14.99', description: 'Stir-fried noodles with egg.' },
                { name: 'Mixed Chowmein', price: '$14.99', description: 'Stir-fried noodles with a mix of chicken, shrimp, and vegetables.' },
               
            ]
        },
        {
            category: 'Biryanis',
            items: [
                { name: 'Vegetable Biryani', price: '$15.99', description: 'Fragrant Basmati rice, spices, and your choice of veggies, enhanced with saffron, rose water, and exotic Indian spices garnished with nuts. Served with homemade Raita.' },
                { name: 'Chicken Biryani', price: '$17.99', description: 'Fragrant Basmati rice, spices, and chicken, enhanced with saffron, rose water, and exotic Indian spices garnished with nuts. Served with homemade Raita.' },
                { name: 'Lamb Biryani', price: '$19.99', description: 'Fragrant Basmati rice, spices, and lamb, enhanced with saffron, rose water, and exotic Indian spices garnished with nuts. Served with homemade Raita.' },
                { name: 'Mutton Biryani', price: '$19.99', description: 'Fragrant Basmati rice, spices, and mutton, enhanced with saffron, rose water, and exotic Indian spices garnished with nuts. Served with homemade Raita.' },
                { name: 'Chicken 65 Biryani', price: '$17.99', description: 'Fragrant Basmati rice, spices, and chicken 65, enhanced with saffron, rose water, and exotic Indian spices garnished with nuts. Served with homemade Raita.' }
            ]
        },
        {
            category: 'Fried Rices',
            items: [
                { name: 'Veg Fried Rice', price: '$13.99', description: '' },
                { name: 'Egg Fried Rice', price: '$15.99', description: '' },
                { name: 'Chicken Fried Rice', price: '$16.99', description: '' },
                { name: 'Shrimp Fried Rice', price: '$18.99', description: '' },
                { name: 'Szechwan Veg Fried Rice', price: '$14.99', description: '' },
                { name: 'Szechwan Chicken Fried Rice', price: '$17.99', description: '' }
            ]
        },
        {
            category: 'Kids Special',
            items: [
                { name: 'Egg Roll', price: '$6.99', description: 'Egg wrapped in a flaky pastry.' },
                { name: 'Onion Rings', price: '$5.99', description: 'Crispy battered onion rings.' },
                { name: 'French Fries', price: '$5.99', description: 'Classic crispy French fries.' },
                { name: 'Chicken Wings (5 Pcs)', price: '$7.99', description: 'Fried chicken wings with a tangy sauce.' },
                { name: 'Chicken Nuggets', price: '$7.99', description: 'Breaded or battered pieces of chicken that are typically fried or baked.' },
                { name: 'Chicken Burger', price: '$8.99', description: 'Grilled chicken patty, lettuce, tomato, and ketchup.' },
                { name: 'Juice', price: '$4.99', description: 'Apple, Orange, Pineapple, or Cranberry juice.' }
            ]
        },
        {

            category: 'Tandoori',
            items: [
                { name: 'Chicken Tandoori (Full)', price: '$18.99', description: 'Marinated and grilled chicken.' },
                { name: 'Chicken Tandoori (Half)', price: '$13.99', description: 'Marinated and grilled chicken.' },
                { name: 'Chicken Tikka Kabab', price: '$18.99', description: 'Marinated chicken pieces grilled to perfection.' },
                { name: 'Lamb Chops', price: '$21.99', description: 'Marinated lamb chops grilled.' },
                { name: 'Salmon Fish Tikka Kabab', price: '$19.99', description: 'Marinated salmon grilled.' },
                { name: 'Tandoori Fish', price: '$19.99', description: 'Whole fish marinated and grilled.' }
            ]
        },
        {
            category: 'Shrimp (Sea Food)',
            items: [
                { name: 'Shrimp Vindaloo', price: '$18.99', description: 'Spicy shrimp curry with a vinegar base.' },
                { name: 'Shrimp Kurma', price: '$18.99', description: 'Shrimp cooked in a creamy, mild sauce.' },
                { name: 'Shrimp Saag', price: '$18.99', description: 'Shrimp cooked with spinach.' },
                { name: 'Shrimp Tikka Masala', price: '$18.99', description: 'Grilled shrimp in a creamy tomato sauce.' },
                { name: 'Shrimp Kadai', price: '$18.99', description: 'Shrimp cooked with bell peppers and onions in a kadai.' },
                { name: 'Salmon Tikka Masala', price: '$19.99', description: 'Marinated and grilled salmon.' }
            ]
        },
        {
            category: 'Veg Curry',
            items: [
                { name: 'Daal Tadka', price: '$13.99', description: 'Lentils cooked with tempered spices.' },
                { name: 'Palak/Saag Paneer', price: '$15.99', description: 'Spinach cooked with cottage cheese.' },
                { name: 'Aloo Gobi', price: '$14.99', description: 'Potatoes and cauliflower cooked with spices.' },
                { name: 'Chana Masala', price: '$14.99', description: 'Chickpeas cooked in a spicy tomato sauce.' },
                { name: 'Malai Kofta Curry', price: '$15.99', description: 'Cottage cheese and vegetable dumplings in a creamy sauce.' },
                { name: 'Mutter Paneer', price: '$15.99', description: 'Peas and cottage cheese in tomato gravy.' },
                { name: 'Kadai Paneer', price: '$15.99', description: 'Cottage cheese cooked with bell peppers and onions in a kadai.' },
                { name: 'Paneer Tikka Masala', price: '$15.99', description: 'Grilled cottage cheese in a creamy tomato sauce.' },
                { name: 'Aloo Mutter', price: '$14.99', description: 'Potatoes, green peas & tomatoes cooked in spicy sauce.' },
                { name: 'Mix Veg Korma', price: '$15.99', description: 'Mixed vegetables cooked with fruits and cream sauce.' }
            ]
        },
        {
            category: 'Non-Veg Curry',
            items: [
                { name: 'Butter Chicken', price: '$16.99', description: 'Chicken in a creamy tomato sauce.' },
                { name: 'Chicken Tikka Masala', price: '$18.99', description: 'Grilled chicken in a creamy tomato sauce.' },
                { name: 'Chicken Vindaloo', price: '$16.99', description: 'A fiery, spicy chicken curry with a vinegar base, featuring boneless chicken and potatoes cooked in a tangy, gluten-free sauce.' },
                { name: 'Chicken Korma', price: '$16.99', description: 'Chicken cooked in a creamy, mild sauce.' },
                { name: 'Chicken Saag', price: '$16.99', description: 'Chicken cooked with spinach.' },
                { name: 'Chicken Chettinadu', price: '$16.99', description: 'Spicy South Indian chicken curry.' },
                { name: 'Chicken Kadai', price: '$16.99', description: 'Chicken cooked with bell peppers and onions in a kadai.' },
                { name: 'Gongura Chicken', price: '$17.99', description: 'Traditional spicy chicken curry.' },
                { name: 'Fish Curry', price: '$18.99', description: 'Fish cooked in spiced tomato gravy.' },
                { name: 'Goat Curry', price: '$18.99', description: 'Goat meat cooked in spiced gravy.' },
                { name: 'Gongura Goat', price: '$19.99', description: 'Traditional spicy goat curry.' },
                { name: 'Lamb Saag', price: '$18.99', description: 'Lamb cooked with spinach.' },
                { name: 'Lamb Vindaloo', price: '$18.99', description: 'Spicy lamb curry with a vinegar base.' },
                { name: 'Lamb Kadai', price: '$18.99', description: 'Lamb cooked with bell peppers and onions in a kadai.' },
                { name: 'Lamb Tikka Masala', price: '$18.99', description: 'Grilled lamb in a creamy tomato sauce.' }
            ]
        },
        {
            category: 'Naan & Roti',
            items: [
                { name: 'Plain Naan', price: '$2.99', description: 'Soft, leavened white bread.' },
                { name: 'Garlic Naan', price: '$3.99', description: 'Naan topped with garlic.' },
                { name: 'Butter Naan', price: '$3.99', description: 'Naan topped with butter.' },
                { name: 'Onion Naan', price: '$3.99', description: 'Naan stuffed with spiced onions.' },
                { name: 'Kashmiri Naan', price: '$3.99', description: 'Naan stuffed with nuts and dried fruits.' },
                { name: 'Tandoori Roti', price: '$2.99', description: 'Whole wheat bread.' },
                { name: 'Chilly Bullet Naan', price: '$3.99', description: 'Spicy naan bread.' },
                { name: 'Cheese Naan', price: '$3.99', description: 'Naan stuffed with cheese.' }
            ]
        },
        {
            category: 'Side Dishes',
            items: [
                { name: 'Raita', price: '$2.19', description: 'Yogurt mixed with cucumber, mint, and spices.' },
                { name: 'Papadum', price: '$2.19', description: 'Crispy lentil crackers.' },
                { name: 'Achar', price: '$1.99', description: 'Assorted Indian pickles.' },
                { name: 'Aloo Ko Achar', price: '$6.99', description: 'Spicy potato salad with traditional Nepali spices.' },
                { name: 'White Rice', price: '$2.99', description: '' }
            ]
        },
        {
            category: 'Desserts',
            items: [
                { name: 'Gulab Jamun', price: '$2.25', description: 'Deep-fried milk balls soaked in syrup.' },
                { name: 'Ras Malai', price: '$3.99', description: 'Soft cheese patties in sweetened milk.' },
                { name: 'Ice-Cream', price: '$3.99', description: '' }
            ]
        },
        {
            category: 'Beverages',
            items: [
                { name: 'Mango Lassi', price: '$4.99', description: '' },
                { name: 'Masala Tea/Coffee/Hot Lemon', price: '$3.99', description: '' },
                { name: 'Nepali Tea', price: '$3.99', description: '' },
                { name: 'Bottled Water', price: '$1.99', description: '' },
                { name: 'Soda (Coke, Fanta, Sprite)', price: '$2.99', description: '' }
            ]
        }


    ];

    return (
        
         <div className="menu container my-5">
              <h1 className="text-scucess">MENU</h1>
              <p className="text-muted">A contemporary casual dining cuisine that explores the diverse flavors of Nepal.</p>
        
            
            {menuItems.map((category, index) => (
                <div className="category" key={index}>
                    <h3>{category.category}</h3>
                    <ul>
                        {category.items.map((item, idx) => (
                            <li key={idx}>
                                <strong>{item.name}</strong>
                                <br />
                                <span style={{}}>{item.price}</span>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    {index !== menuItems.length - 1 && <hr />} {/* Add line after all but last section */}
                </div>
            ))}
        </div>
        
    );
};

export default Menu;
