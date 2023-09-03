/**
 * 맵드 타입(MappedType)
 * 맵드 타입 예제
 */
type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number}
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}
