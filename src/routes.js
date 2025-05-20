import React from 'react';
import Exam from './views/exams';
import CreateExam from './views/exams/create';
import EditExam from './views/exams/edit';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));

// Payment
const Payment = React.lazy(() => import('./views/payments'));

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'));

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'));
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'));
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'));
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'));
const Layout = React.lazy(() => import('./views/forms/layout/Layout'));
const Range = React.lazy(() => import('./views/forms/range/Range'));
const Select = React.lazy(() => import('./views/forms/select/Select'));
const Validation = React.lazy(() => import('./views/forms/validation/Validation'));

const Charts = React.lazy(() => import('./views/charts/Charts'));

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));

// Notifications
const University = React.lazy(() => import('./views/university'));
const EditUniversity = React.lazy(() => import('./views/university/edit'));
const CreateUniversity = React.lazy(() => import('./views/university/create'));

const Questions = React.lazy(() => import('./views/questions/Questions'));
const EditQuestion = React.lazy(() => import('./views/questions/edit'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/theme', name: 'Theme', element: Colors, exact: true },
    { path: '/theme/colors', name: 'Colors', element: Colors },
    { path: '/theme/typography', name: 'Typography', element: Typography },
    // Payment
    { path: '/payments', name: 'Payment', element: Payment, exact: true },
    //
    { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
    { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
    { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
    { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
    { path: '/charts', name: 'Charts', element: Charts },
    { path: '/forms', name: 'Forms', element: FormControl, exact: true },
    { path: '/forms/form-control', name: 'Form Control', element: FormControl },
    { path: '/forms/select', name: 'Select', element: Select },
    { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
    { path: '/forms/range', name: 'Range', element: Range },
    { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
    { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
    { path: '/forms/layout', name: 'Layout', element: Layout },
    { path: '/forms/validation', name: 'Validation', element: Validation },
    { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
    { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
    { path: '/icons/flags', name: 'Flags', element: Flags },
    { path: '/icons/brands', name: 'Brands', element: Brands },

    // university
    { path: '/university', name: 'University', element: University, exact: true },
    { path: '/university/create', name: 'University', element: CreateUniversity, exact: true },
    { path: '/university/:id', name: 'EditUniversity', element: EditUniversity, exact: true },

    // university
    { path: '/exams', name: 'Exam', element: Exam, exact: true },
    { path: '/exams/create', name: 'Exam Create', element: CreateExam, exact: true },
    { path: '/exams/:id', name: 'Exam Edit', element: EditExam, exact: true },

    // questions
    { path: '/questions', name: 'Questions', element: Questions },
    { path: '/questions/:id', name: 'EditQuestion', element: EditQuestion },
];

export default routes;
