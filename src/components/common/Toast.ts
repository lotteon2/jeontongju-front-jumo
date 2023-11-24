import Swal from 'sweetalert2';
import success from '../../assets/images/success.png';
import danger from '../../assets/images/danger.png';

const CustomToast = Swal.mixin({
	toast: true,
	position: 'bottom-start',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	},
});

export const Toast = (isSuccess: boolean, title: string) => {
	CustomToast.fire({
		title,
		color: '#212B36',
		background: '#FFFFFF',
		iconHtml: isSuccess
			? `<a><img style="width: 80px" src=${success} alt="success"></a>`
			: `<a><img style="width: 80px" src=${danger} alt="danger"></a>`,
	});
};
