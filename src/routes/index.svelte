<script lang="ts">
	import { createForm, getValue } from 'felte';
	import { ElementList, elementName } from '@domain/constants/Elements';
	// TODO: バリデーション
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { DamageHelper } from '@domain/use_cases';
	import {
		sharpnessElementCorrection,
		SharpnessList,
		sharpnessMagnification,
		sharpnessName
	} from '@domain/constants/Sharpness';
	import { Helper } from '@utils/Helpers';

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
	$: attack = getValue($data, 'attack') ?? '';
	$: affinity = getValue($data, 'affinity') ?? '';
	$: sharpness = getValue($data, 'sharpness') ?? '';
	$: element = getValue($data, 'element') ?? '';
	$: elementValue = getValue($data, 'elementValue') ?? '';

	$: expectedValue = DamageHelper.expectedValue(
		Helper.parseNumber(attack),
		Helper.parseNumber(affinity),
		sharpnessMagnification(sharpness)
	).toString();
	$: expectedElementValue =
		Helper.parseNumber(elementValue) * sharpnessElementCorrection(sharpness).toString();
	// $: console.log(validatorSchema.validateSync("attack"));
</script>

<body>
	<h1>MHXX 期待値計算シミュレータ</h1>
	<form use:form>
		<p>攻撃力</p>
		<select name="sharpness" size="1">
			{#each SharpnessList as sharpness}
				<option value={sharpness}>{sharpnessName(sharpness)}</option>
			{/each}
		</select>
		<input type="text" name="attack" accept="" />
		<p>会心率</p>
		<input type="text" name="affinity" />
		<p>属性</p>
		<select name="element" size="1">
			{#each ElementList as element}
				<option value={element}>{elementName(element)}</option>
			{/each}
		</select>
		<input type="text" name="elementValue" />
	</form>
	<h2>結果</h2>
	<p>期待値</p>
	<p>{expectedValue}</p>
	<p class="bg-red-400">属性値</p>
	<div class="flex-row">
		<p>{elementName(element)}</p>
		<p>{expectedElementValue}</p>
	</div>
</body>

<style>
	h1 {
		color: red;
	}
</style>
