<script lang="ts">
	import { createForm, getValue } from 'felte';
	// TODO: バリデーション
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { DamageHelper } from '@domain/use_cases';
	import { ElementList, elementName } from '@domain/constants/Elements';
	import {
		sharpnessElementCorrection,
		SharpnessList,
		sharpnessMagnification,
		sharpnessName
	} from '@domain/constants/Sharpness';
	import { Helper } from '@utils/Helpers';
	import { WeaponTypeList, weaponTypeProperty } from '@domain/constants/WeaponType';
	import Tooltip from '@components/Tooltip.svelte';

	// style
	const BODY_CLASSES = 'bg-background m-8 space-y-3 items-center';
	const FORMS_Y_SPACE = 'space-y-2';
	const FORM_Y_SPACE = 'space-y-1';

	// forms
	const validatorSchema = yup.object({
		attack: yup.string().test('attack is not number', '', (value) => {
			return value.length === 0;
		}),
		affinity: yup.string().test('', '', (value) => {
			return value.length === 0 || parseInt(value) !== undefined;
		}),
		sharpness: yup.string().test('', '', (value) => {
			return value.length === 0 || parseInt(value) !== undefined;
		}),
		element: yup.string().test('', '', (value) => {
			return value.length === 0 || parseInt(value) !== undefined;
		}),
		elementValue: yup.string().test('', '', (value) => {
			return value.length === 0 || parseInt(value) !== undefined;
		})
	});

	const { form, data } = createForm<yup.InferType<typeof validatorSchema>>({
		onSuccess: (res, cxt) => {
			// attack = res as string;
		},
		onSubmit: async (values) => {
			/* call to an api */
		},
		onError: (err, ctx) => {
			console.log('エラーやで！');
		},
		extend: validator({ schema: validatorSchema, level: 'error' })
	});

	// reactive
	$: attack = getValue($data, 'attack') ?? '';
	$: affinity = getValue($data, 'affinity') ?? '';
	$: sharpness = getValue($data, 'sharpness') ?? '';
	$: element = getValue($data, 'element') ?? '';
	$: elementValue = getValue($data, 'elementValue') ?? '';

	$: expectedValue = DamageHelper.expectedValue(
		Helper.parseNumber(attack),
		Helper.parseNumber(affinity),
		sharpnessMagnification(sharpness),
		false
	).toString();
	$: expectedElementValue =
		(Helper.parseNumber(elementValue) * sharpnessElementCorrection(sharpness)).toString();
	// $: console.log(validatorSchema.validateSync("attack"));
</script>

<body class={BODY_CLASSES}>
	<h1 class="text-primary text-2xl font-bold mb-8">MHXX 期待値計算シミュレータ</h1>

	<form use:form class={FORMS_Y_SPACE}>
		<div class={FORM_Y_SPACE}>
			<p>攻撃力</p>
			<select name="sharpness" size="1">
				{#each SharpnessList as sharpness}
					<option value={sharpness}>{sharpnessName(sharpness)}</option>
				{/each}
			</select>
		</div>
		<div class={FORM_Y_SPACE}>
			<input type="number" name="attack" step="10" accept="" />
			<div class="flex items-center space-x-1">
				<p class="align-middle">会心率</p>
				<Tooltip message="100以上は、100として計算されます" />
			</div>
			<input type="number" step="5" name="affinity" />
		</div>
		<div class={FORM_Y_SPACE}>
			<p>属性</p>
			<select name="element" size="1">
				{#each ElementList as element}
					<option value={element}>{elementName(element)}</option>
				{/each}
			</select>
			<input type="number " name="elementValue" />
		</div>
		<div class={FORM_Y_SPACE}>
			<p>武器種</p>
			<select name="weaponType" size="1">
				{#each WeaponTypeList as value}
					<option {value}>{weaponTypeProperty(value).name}</option>
				{/each}
			</select>
		</div>
	</form>
	<div class="">
		<h2 class="text-lg font-bold">結果</h2>
		<p>期待値</p>
		<p>{expectedValue}</p>
		<p class="">属性値</p>
		<div class="flex space-x-2">
			<p>{elementName(element)}</p>
			<p>{expectedElementValue}</p>
		</div>
	</div>
</body>

<!-- TODO: global.css へ移動する -->
<svelte:head>
	<style>
		[data-tooltip] {
			position: relative;
			z-index: 2;
			display: block;
		}

		[data-tooltip]:before,
		[data-tooltip]:after {
			visibility: hidden;
			opacity: 0;
			pointer-events: none;
			transition: 0.2s ease-out;
			transform: translate(-50%, 5px);
		}

		[data-tooltip]:before {
			position: absolute;
			bottom: 100%;
			left: 50%;
			margin-bottom: 5px;
			padding: 7px;
			width: 100%;
			min-width: 170px;
			max-width: 5000px;
			-webkit-border-radius: 3px;
			-moz-border-radius: 3px;
			border-radius: 3px;
			background-color: #000;
			background-color: hsla(0, 0%, 20%, 0.9);
			color: #fff;
			content: attr(data-tooltip);
			text-align: center;
			font-size: 14px;
			line-height: 1.2;
			transition: 0.2s ease-out;
		}

		[data-tooltip]:after {
			position: absolute;
			bottom: 100%;
			left: 50%;
			width: 0;
			border-top: 5px solid #000;
			border-top: 5px solid hsla(0, 0%, 20%, 0.9);
			border-right: 5px solid transparent;
			border-left: 5px solid transparent;
			content: ' ';
			font-size: 0;
			line-height: 0;
		}

		[data-tooltip]:hover:before,
		[data-tooltip]:hover:after {
			visibility: visible;
			opacity: 1;
			transform: translate(-50%, 0);
		}
		[data-tooltip='false']:hover:before,
		[data-tooltip='false']:hover:after {
			visibility: hidden;
			opacity: 0;
		}
	</style>
</svelte:head>
