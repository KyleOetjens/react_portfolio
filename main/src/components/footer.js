import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function Footer() {
    return (
        <footer className="footer" >
            <ul className="footer-list">
                <Button  href="https://github.com/KyleOetjens" target='blank'>Git</Button>{' '}
                <Button href='https://www.linkedin.com/in/kyle-oetjens-78a954a5/' target='blank'>LinkedIn</Button>{' '}
                <Button href='https://stackoverflow.com/users/7792345/kyle-oetjens' target='blank'>Stack Overflow</Button>
            </ul>
        </footer>
    )
}

// import Button from 'react-bootstrap/Button';

// function TagTypesExample() {
//   return (
//     <>
//       <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
//       <Button as="input" type="button" value="Input" />{' '}
//       <Button as="input" type="submit" value="Submit" />{' '}
//       <Button as="input" type="reset" value="Reset" />
//     </>
//   );
// }

// export default TagTypesExample;