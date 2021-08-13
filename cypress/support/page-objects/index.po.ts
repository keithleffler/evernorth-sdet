export namespace IndexHTML {
    export namespace FirstItemButton {
        export const selector = ':nth-child(1) > .card > .card-block > .card-title > .hrefch';
        export const get = () => cy.get(selector);
    };
    export namespace TopBanner {
        const navLinks = () => cy.get('.nav-link');
        export namespace Home {
            export const get = () => navLinks().contains('Home')
        };

        export namespace  Contact {
            export const get = () => navLinks().contains('Contact');
        };

        export namespace  About {
            export const get = () => navLinks().contains('About');
        }
        export namespace  Cart {
            export const get = () => navLinks().contains('Cart');
        }
        export namespace  Login {
            export const get = () => navLinks().contains('Log in');
        }
        export namespace Logout {
            export const get = () => navLinks().contains('Log out');
        }
        export namespace  Signup {
            export const get = () => navLinks().contains('Sign up');
        }
    }

}
