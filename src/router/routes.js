import MainLayout from '../components/layout-component';
import HomePage from '../components/Home/index';
import RecipesPage from '../components/recipes/index';

export const routes = [
    {
        name: 'main', path: '', component: MainLayout,
        children: [
            {
                name: 'home',
                path: "/",
                component: HomePage
            },
            {
                name: 'Recipes',
                path: "/recipes",
                component: RecipesPage
            }
        ]
    }
];
